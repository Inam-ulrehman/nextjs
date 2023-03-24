import { customFetch } from '@/utils/axios'
import {
  getItemFromLocalStorage,
  setItemInLocalStorage,
} from '@/utils/localStorage'
import Cookies from 'js-cookie'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const initialState = {
  showRequirements: false,
  showHowToUpload: false,
  uploadedImages: [],
  isLoading: false,
}
const UploadImage = ({ path, cbFunction, imageTitle }) => {
  const [file, setFile] = useState(null)
  const [state, setState] = useState(initialState)

  const handleChange = (e) => {
    setFile(e.target.files[0])
  }

  // =======handle Submit Upload Image=========

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) {
      return toast.warning('Please Chose a file.')
    }
    setState({ ...state, isLoading: true })
    const cookies = Cookies.get('token')
    try {
      const formData = new FormData()
      formData.append('file', file)
      const result = await customFetch.post(`${path}`, formData, {
        headers: {
          Authorization: `Bearer ${cookies}`,
        },
      })
      const image = result.data.result
      setState({
        ...state,
        isLoading: false,
        uploadedImages: [...state.uploadedImages, image],
      })
      const item = [...state.uploadedImages, image]
      setItemInLocalStorage('uploadImage', item)
      toast.success('Image Updated.')
      return
    } catch (error) {
      console.log(error)
      setState({ ...state, isLoading: false })
      toast.error('Image is not uploaded.')
    }
  }
  // =====Delete Image==========
  const handleDelete = async (public_id) => {
    const cookies = Cookies.get('token')
    try {
      setState({ ...state, isLoading: true })
      const result = await customFetch.post(
        '/authadmin/images/destroy',
        { public_id },
        {
          headers: {
            Authorization: `Bearer ${cookies}`,
          },
        }
      )
      const filterImages = state.uploadedImages.filter(
        (item) => item.public_id !== public_id
      )
      setItemInLocalStorage('uploadImage', filterImages)
      setState({ ...state, isLoading: false })
    } catch (error) {
      setState({ ...state, isLoading: false })
      console.log(error)
    }
  }
  // =====handle show class buttons=======
  const handleRequirements = (e) => {
    setState({ ...state, showRequirements: !state.showRequirements })
  }
  const handleHowToUploadImage = (e) => {
    setState({ ...state, showHowToUpload: !state.showHowToUpload })
  }

  // =====================================
  useEffect(() => {
    const localImages = getItemFromLocalStorage('uploadImage')
    if (localImages === null) {
      return
    }
    setState({ ...state, uploadedImages: localImages })
    cbFunction(localImages)
  }, [state.isLoading])
  return (
    <Wrapper>
      {/* ==========upload Image============ */}
      <div className='file-upload-container'>
        <input
          type='file'
          className='custom-file-input'
          onChange={handleChange}
        />
        <button className='btn' type='submit' onClick={handleSubmit}>
          {imageTitle ? imageTitle : 'Upload File'}
        </button>
      </div>
      {/* =========Button show and hide========= */}
      <div className='heading'>
        <div className='box-1'>
          <button type='button' onClick={handleRequirements}>
            Upload Image requirements?
          </button>
          <ul className={state.showRequirements ? null : 'hide'}>
            <li>Size must be under 10MB</li>
            <li>File must be PNG format</li>
          </ul>
        </div>
        <div className='box-2'>
          <button type='button' onClick={handleHowToUploadImage}>
            How to upload Image?
          </button>
          <ul className={state.showHowToUpload ? null : 'hide'}>
            <li>
              <strong>Step 1.</strong> Choose File
            </li>
            <li>
              <strong>Step 2.</strong> {imageTitle ? imageTitle : 'Upload File'}
            </li>
          </ul>
        </div>
      </div>
      {/* ===========List Of images ======== */}
      <div className='image-list-container'>
        {state.uploadedImages?.map((item, index) => {
          return (
            <div key={index} className='image-container'>
              <Image
                alt='folder'
                width={100}
                height={100}
                src={item.secure_url}
              />
              <button
                className='btn '
                onClick={() => handleDelete(item.public_id)}
              >
                Delete
              </button>
            </div>
          )
        })}
        {state.isLoading && <div className='loading' />}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  place-content: center;
  .heading {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    button {
      background: var(--primary-5);
      color: var(--white);
      border: transparent;
      transition: var(--transition-1);
      :hover {
        background: var(--primary-7);
        cursor: pointer;
      }
    }
    ul {
      margin: 0;
      margin-top: -5px;
      background-color: var(--grey-3);
    }
    .box-1,
    .box-2 {
      margin: 0 auto;
    }
  }
  .hide {
    display: none;
  }
  /*========= upload images List======== */
  .image-list-container {
    display: flex;
    flex-wrap: wrap;
    .image-container {
      margin: 5px;
      border: 2px solid var(--grey-3);
      display: grid;
      .btn {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }
`
export default UploadImage

import { customFetch } from '@/utils/axios'
import {
  getItemFromLocalStorage,
  setItemInLocalStorage,
} from '@/utils/localStorage'
import Cookies from 'js-cookie'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'

const initialState = {
  showRequirements: false,
  showHowToUpload: false,
  uploadedImages: [],
  file: null,
  isLoading: false,
  submitImage: false,
}
const UploadImage = ({ path, cbFunction, imageTitle }) => {
  const [state, setState] = useState(initialState)
  const imageRef = useRef()

  const handleChange = async (e) => {
    setState({ ...state, file: e.target.files[0] })
  }
  const handleSubmit = async () => {
    setState({ ...state, isLoading: true })

    const cookies = Cookies.get('token')
    try {
      const formData = new FormData()
      formData.append('file', state.file)
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
      imageRef.current.value = ''
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

  // ===== set image in local storage and cb function===========
  useEffect(() => {
    const localImages = getItemFromLocalStorage('uploadImage')
    if (localImages === null) {
      return
    }
    setState({ ...state, uploadedImages: localImages })
    cbFunction(localImages)
  }, [state.isLoading])
  // =======submit image ==========
  useEffect(() => {
    if (state.file === null) {
      return
    }
    handleSubmit()
  }, [state.file])
  return (
    <Wrapper>
      {/* ==========upload Image============ */}
      <div className='file-upload-container'>
        <label htmlFor='file-upload' className='custom-file-upload'>
          Select Image
          <input
            type='file'
            id='file-upload'
            ref={imageRef}
            className='custom-file-input'
            onChange={handleChange}
          />
        </label>
      </div>
      {/* =========Button show and hide========= */}
      <div className='heading'>
        <div className='box-1'>
          <button type='button' onClick={handleRequirements}>
            requirements?
          </button>
          <ul className={state.showRequirements ? null : 'hide'}>
            <li>Size 10MB</li>
            <li>Format PNG</li>
          </ul>
        </div>
        <div className='box-2'>
          <button type='button' onClick={handleHowToUploadImage}>
            How to upload?
          </button>
          <ul className={state.showHowToUpload ? null : 'hide'}>
            <li>
              <strong>1.</strong> Select Image
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
  /* imageUpload */
  .file-upload-container {
    text-align: center;
    input[type='file'] {
      display: none;
    }
    .custom-file-upload {
      border: 1px solid #ccc;
      display: inline-block;
      padding: 6px 12px;
      margin: 0.5rem;
      background-color: var(--white);
      box-shadow: var(--shadow-3);
      cursor: pointer;
      :hover {
        background-color: var(--grey-3);
      }
    }
  }
  /* warnings */
  .heading {
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    button {
      background: var(--primary-5);
      color: var(--white);
      border: transparent;
      transition: var(--transition-1);
      padding: 7px;
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

// ======= how to use=======
// api `path` to deliver image and handle from back end
// cb function ro receive images [] back .
// images also stored in localStorage .

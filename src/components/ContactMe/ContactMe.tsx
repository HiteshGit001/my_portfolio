import React, { useEffect, useReducer } from 'react';
import style from './ContactMe.module.scss';
import { ALPHA_REGEX, EMAIL_REGEX, NUMBER_REGEX } from '../../helper/regex';
import { axiosPost } from '../../server/https.server';
import { SUBMIT_FORM } from '../../api/api';
import cx from 'classnames';

const ContactMe = ({ blok }) => {
  const size = screen.availWidth;

  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    company: '',
    designation: '',
  }

  const errorState = {
    errorFirstName: '',
    errorLastName: '',
    errorEmail: '',
    errorMobileNumber: '',
    errorCompany: '',
    errorDesignation: '',
  }

  const errorReducer = (state, action) => {
    switch (action.type) {
      case "errorFirstName":
        return { ...state, errorFirstName: action.value };
      case "errorLastName":
        return { ...state, errorLastName: action.value };
      case "errorEmail":
        return { ...state, errorEmail: action.value };
      case "errorMobileNumber":
        return { ...state, errorMobileNumber: action.value };
      case "errorCompany":
        return { ...state, errorCompany: action.value };
      case "errorDesignation":
        return { ...state, errorDesignation: action.value };
      case "reset":
        return {
          errorFirstName: '',
          errorLastName: '',
          errorEmail: '',
          errorMobileNumber: '',
          errorCompany: '',
          errorDesignation: '',
        }
      default:
        return state;
    }
  }

  const formReducer = (state, action) => {
    switch (action.type) {
      case "firstName":
        return { ...state, firstName: action.value };
      case "lastName":
        return { ...state, lastName: action.value };
      case "email":
        return { ...state, email: action.value };
      case "mobileNumber":
        return { ...state, mobileNumber: action.value };
      case "company":
        return { ...state, company: action.value };
      case "designation":
        return { ...state, designation: action.value };
      case "reset":
        return {
          firstName: '',
          lastName: '',
          email: '',
          mobileNumber: '',
          company: '',
          designation: '',
        }
      default:
        return state;
    }
  }
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const [error, errorDispatch] = useReducer(errorReducer, errorState)

  const validate = (value: string, name: string, regex = ALPHA_REGEX) => {
    if (value !== '') {
      errorDispatch({ type: name, value: '' })
      if (!regex.test(value)) {
        errorDispatch({ type: name, value: 'Invalid Value' })
      } else {
        errorDispatch({ type: name, value: '' })
      }
    } else {
      errorDispatch({ type: name, value: 'Required' })
    }
  }

  const onSubmit = async (event: any) => {
    event.preventDefault()
    // validation for form
    validate(formData.firstName, 'errorFirstName');
    validate(formData.lastName, 'errorLastName');
    validate(formData.email, 'errorEmail', EMAIL_REGEX);
    validate(formData.company, 'errorCompany');
    validate(formData.designation, 'errorDesignation');
    validate(formData.mobileNumber, 'errorMobileNumber', NUMBER_REGEX);

    // api call
    try {
      if (!Object.values(error)?.filter((ele) => ele !== '')?.length) {
        const response: any = await axiosPost(SUBMIT_FORM, formData);
        if (response.status === 201) {
          dispatch({ type: 'reset', value: '' });
          errorDispatch({ type: 'reset', value: '' })
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='card container p_16'>
      <p className='fs_48 w_500 primary'>{blok?.Name}</p>
      <p className='fs_16 f_league white w_50'>{blok?.disc}</p>
      <p className='fs_16 f_league white w_50'>{blok?.email}</p>
      <div className='flex gap_16 mt_16'>
        {
          blok?.hoverdSocial?.map((ele: any) => {
            return (
              <div className='bg_white flex row_center black col_center w_128 p_16 br_16'>
                <img src={ele?.Icon?.filename} alt={ele?.Icons?.alt} />
              </div>
            )
          })
        }
      </div>
      <form onSubmit={onSubmit}>
        <div className={cx(size >= 500 ? 'flex gap_8 mt_16' : 'flex column gap_16 mt_16')}>
          <div className='w_100'>
            <div className='flex gap_8 mb_8'>
              <div className='w_100'>
                <input
                  onChange={(event) => {
                    dispatch({ type: 'firstName', value: event.target.value });
                    validate(event.target.value, 'errorFirstName')
                  }}
                  className='w_100'
                  placeholder='First Name'
                  value={formData.firstName}
                />
                {
                  error.errorFirstName ? <p className='error'>{error.errorFirstName}</p> : <></>
                }
              </div>
              <div className='w_100'>
                <input
                  onChange={(event) => {
                    dispatch({ type: 'lastName', value: event.target.value });
                    validate(event.target.value, 'errorLastName')
                  }}
                  className='w_100'
                  placeholder='Last Name'
                  value={formData.lastName}
                />
                {
                  error.errorLastName ? <p className='error'>{error.errorLastName}</p> : <></>
                }
              </div>
            </div>
            <div className='flex gap_8 mb_8'>
              <div className='w_100'>
                <input
                  onChange={(event) => {
                    dispatch({ type: 'email', value: event.target.value });
                    validate(event.target.value, 'errorEmail', EMAIL_REGEX)
                  }}
                  className='w_100'
                  placeholder='Email'
                  value={formData.email}
                />
                {
                  error.errorEmail ? <p className='error'>{error.errorEmail}</p> : <></>
                }
              </div>
              <div className='w_100'>
                <input
                  onChange={(event) => {
                    dispatch({ type: 'company', value: event.target.value });
                    validate(event.target.value, 'errorCompany')
                  }}
                  className='w_100'
                  placeholder='Company'
                  value={formData.company}
                />
                {
                  error.errorCompany ? <p className='error'>{error.errorCompany}</p> : <></>
                }
              </div>
            </div>
            <div className='flex gap_8'>
              <div className='w_100'>
                <input
                  onChange={(event) => {
                    dispatch({ type: 'designation', value: event.target.value });
                    validate(event.target.value, 'errorDesignation')
                  }}
                  className='w_100'
                  placeholder='Designation'
                  value={formData.designation}
                />
                {
                  error.errorDesignation ? <p className='error'>{error.errorDesignation}</p> : <></>
                }
              </div>
              <div className='w_100'>
                <input
                  onChange={(event) => {
                    dispatch({ type: 'mobileNumber', value: Number(event.target.value) });
                    validate(event.target.value, 'errorMobileNumber', NUMBER_REGEX)
                  }}
                  value={formData.mobileNumber}
                  className='w_100'
                  type='number'
                  placeholder='Mobile Number' />
                {
                  error.errorMobileNumber ? <p className='error'>{error.errorMobileNumber}</p> : <></>
                }
              </div>
            </div>
          </div>
          <div>
            <button type='submit' className={style.submit}>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactMe;
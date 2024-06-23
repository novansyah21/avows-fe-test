import axios from 'axios';
import {
  FETCH_CONTACTS_SUCCESS,
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT
} from './types';

const apiUrl = 'https://contact.herokuapp.com/contact';

export const fetchContacts = () => async (dispatch) => {
  try {
    const response = await axios.get(apiUrl);
    dispatch({
      type: FETCH_CONTACTS_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
  }
};

export const addContact = (contact) => async (dispatch) => {
  try {
    const response = await axios.post(apiUrl, contact);
    dispatch({
      type: ADD_CONTACT,
      payload: response.data
    });
  } catch (error) {
    console.error('Error adding contact:', error);
  }
};

export const updateContact = (id, updatedContact) => async (dispatch) => {
  try {
    const response = await axios.put(`${apiUrl}/${id}`, updatedContact);
    dispatch({
      type: UPDATE_CONTACT,
      payload: response.data
    });
  } catch (error) {
    console.error('Error updating contact:', error);
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  } catch (error) {
    console.error('Error deleting contact:', error);
  }
};

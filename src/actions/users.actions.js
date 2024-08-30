'use server'

import axios from "axios";
import { revalidatePath } from "next/cache";

const baseURL = process.env.NEXT_PUBLIC_SERVER

export const getUsers = async (searchParams) => {

    try {
        let { data } = await axios.get(`${baseURL}/users`, {
            params: searchParams
        })
        return data
    } catch (error) {
        return {
            data: [],
            pageEnd: 1,
            page: 1
        }
    }
}

export const getUserById = async (id) => {

    try {
        let { data } = await axios.get(`${baseURL}/users/${id}`)
        return data
    } catch (error) {
        return {
            data: [],
        }
    }
}

export const deleteUserById = async (id) => {

    try {
        let { data } = await axios.delete(`${baseURL}/users/${id}`)
        revalidatePath('/')
        return data
    } catch (error) {
        throw new Error(error?.response?.data?.message || 'Internal Server Error')
    }
}


export const updateUserById = async (id, payload) => {

    try {
        let { data } = await axios.patch(`${baseURL}/users/${id}`, payload);
        revalidatePath('/')
        return data
    } catch (error) {
        throw new Error(error?.response?.data?.message || 'Internal Server Error')
    }
}

export const postUser = async (payload) => {
    try {
        let { data } = await axios.post(`${baseURL}/users`, payload);
        revalidatePath('/')
        return data
    } catch (error) {
        throw new Error(error?.response?.data?.message || 'Internal Server Error')
    }
}
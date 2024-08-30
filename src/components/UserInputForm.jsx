'use client'

import { postUser, updateUserById } from '@/actions/users.actions';
import { Loader2 } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Button } from './ui/button';

const initState = {
    name: '',
    email: '',
    dateofBirth: '',
    address: '',
    phone: '',
    profileImage: ''
}

const UserInputForm = ({ defaultValue = initState }) => {
    const [formData, setFormData] = useState(defaultValue);
    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)
        try {
            await postUser(formData);
            toast.success('Added Successfully')
            setFormData(initState)
            e.target.reset();
        } catch (error) {
            toast.error(error.message)
        }
        setLoading(false)
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        setLoading(true);
        try {
            await updateUserById(defaultValue?._id, formData);
            toast.success('Updated Successfully')
        } catch (error) {
            toast.error(error.message)
        }
        setLoading(false)
    }

    return (
        <div className={`flex gap-10 lg:gap-20 mb-10 flex-col-reverse lg:flex-row`}>

            <form className='space-y-6' onSubmit={defaultValue?._id ? handleUpdate : handleSubmit}>
                <div className='flex'>
                    <label className='basis-48'>Name:</label>
                    <input
                        type="text"
                        name="name"
                        className='border p-2 rounded-md'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='flex'>
                    <label className='basis-48'>Email:</label>
                    <input
                        type="email"
                        name="email"
                        className='border p-2 rounded-md'
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='flex'>
                    <label className='basis-48'>Date of Birth:</label>
                    <input
                        type="date"
                        name="dateofBirth"
                        className='border p-2 rounded-md'
                        value={formData.dateofBirth}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='flex gap-2'>
                    <label className='basis-48'>Address: </label>
                    <input
                        type="text"
                        name="address"
                        className='border p-2 rounded-md'
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='flex'>
                    <label className='basis-48'>Phone:</label>
                    <input
                        type="tel"
                        name="phone"
                        className='border p-2 rounded-md'
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='flex'>
                    <label className='basis-48'>Profile:</label>
                    <input
                        type="url"
                        name="profileImage"
                        value={formData.profileImage}
                        className='border p-2 rounded-md'
                        onChange={handleChange}
                        required
                    />
                </div>
                <Button type="submit" className="gap-2" disabled={loading}>
                    {defaultValue?._id ? 'Update' : 'Submit'} {loading && <Loader2 className='animate-spin w-4 h-4' />}
                </Button>
            </form>

            {defaultValue?._id && <div className='space-y-2'>
                <img className='rounded-full object-contain m-auto' src={defaultValue?.profileImage} alt={defaultValue?.name} />
                <p>Name : {defaultValue?.name}</p>
                <p>Email : {defaultValue?.email}</p>
                <p>DOB : {defaultValue?.dateofBirth}</p>
                <p>Address : {defaultValue?.address}</p>
                <p>Phone No : {defaultValue?.phone}</p>
            </div>}

        </div>

    );
};

export { UserInputForm };

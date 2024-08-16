'use client';

import React from 'react';

import { TabsContent } from '@/components/ui/tabs';
import { FaPhone } from 'react-icons/fa6';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Modal from '@/components/Modal';
import { useState } from 'react';
import Loading from '@/components/Loading';
import { MdEmail } from 'react-icons/md';

function ContactTab() {
  const [showModal, setShowModal] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const [contact, setContact] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setShowLoading(true);
    var data = {
      ...contact,
      formDataNameOrder: '["firstname","lastname","email","message"]',
      formGoogleSendEmail: process.env.SCRIPT_EMAIL,
      formGoogleSheetName: process.env.SCRIPT_SHEET,
    };

    var encoded = Object.keys(data)
      .map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]);
      })
      .join('&');

    fetch(process.env.SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encoded,
    }).then(() => {
      setShowLoading(false);
      setShowModal(true);
    });
  };

  return (
    <>
      <TabsContent value="contact" className="w-full">
        <div className="flex flex-col gap-[30px]">
          <h3 className="h3 font-bold px-0 lg:px-4 text-center md:text-left">
            Contact Me
          </h3>
          <div className="flex-1 flex gap-6">
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex items-center gap-4">
                <FaPhone className="size-[20px]" />
                <div className="flex-1 leading-none">
                  <p className="text-xs text-black/50">Phone</p>
                  <h3>+62 8573 8940 271</h3>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full h-full">
              <div className="flex items-center gap-4">
                <MdEmail className="size-[24px]" />
                <div className="flex-1 leading-none">
                  <p className="text-xs text-black/50">Email</p>
                  <h3>ilhamarsy16@gmail.com</h3>
                </div>
              </div>
            </div>
          </div>
          <form
            className="flex flex-col gap-4 px-0 lg:px-4 mb-[100px]"
            onSubmit={handleFormSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstname">Firstname</Label>
                <Input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  required
                  value={contact.firstname}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="lastname">Lastname</Label>
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  required
                  value={contact.lastname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={contact.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                type="text"
                name="message"
                className="h-[200px]"
                placeholder="Type your message here..."
                required
                value={contact.message}
                onChange={handleChange}
              />
            </div>

            <div className="w-full flex justify-center">
              <button className="rounded-full size-md bg-accent text-white py-2 px-10">
                Send message
              </button>
            </div>
          </form>
        </div>
      </TabsContent>
      {showModal && (
        <Modal
          isOpen={showModal}
          setIsOpen={setShowModal}
          setContact={setContact}
        />
      )}
      {showLoading && <Loading />}
    </>
  );
}

export default ContactTab;

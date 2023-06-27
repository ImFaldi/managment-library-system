import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '@/components/Dashboard/Sidebar';
import Navbar from '@/components/Dashboard/Navbar';
import Table from '@/components/Dashboard/Table';
import Book from '@/components/Tables/Book';

export default function Authenticated({ user }) {
  const [userData, setUserData] = useState([]);
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    axios
      .get('/api/User')
      .then((res) => {
        const filteredUsers = res.data.user.filter((user) => user.role === 'member');
        setUserData(filteredUsers);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get('/api/Book')
      .then((res) => {
        setBookData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  

  console.log(userData);
  console.log(bookData);

  return (
    <div className="min-h-screen pt-3" style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 255, 0.4) 35%, rgba(128, 128, 128, 0.1) 35%)' }}>
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex flex-col w-full border-opacity-50">
          <div className="grid mt-2 pr-5"><Navbar user={user} /></div>
          <div className="flex">
            <div className="mt-5 pr-5 w-full">
              <Table
                title="Member Table"
                columns={[
                  'Name',
                  'Role',
                  'Phone',
                  'Action'
                ]}
                rows={userData.map((user) => ({
                  name: user.name,
                  email: user.email,
                  role: user.role,
                  phone: user.phone,
                  action: 'action'
                }))}
              />
            </div>
            <div className="mt-5 pr-5 w-full">
              <Book
                title ="Book Table"
                columns={[
                  'Title',
                  'Author',
                  'Stock',
                  'Year',
                  'Action'
                ]}
                rows={bookData.map((book) => ({
                    title: book.title,
                    category: book.category.title,
                    author: book.author.name,
                    stock: book.stock,
                    year: book.year,
                    action: 'action'
                  }))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

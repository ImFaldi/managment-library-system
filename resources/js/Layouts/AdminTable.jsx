import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '@/components/Dashboard/Sidebar';
import Navbar from '@/components/Dashboard/Navbar';
import Table from '@/components/Tables/TablesBook';
import Cate from '@/components/Tables/TablesCategory';
import Author from '@/components/Tables/TablesAuthor';
import Borrow from '@/components/Tables/TablesBorrow';

export default function Authenticated({ user }) {
  const [dataBook, setDataBook] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [dataAuthor, setDataAuthor] = useState([]);
  const [BorrowData, setBorrowData] = useState([]);
  const [userData, setUserData] = useState([]);

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
  }, []);

  useEffect(() => {
    axios.get('/api/Book')
      .then((res) => {
        setDataBook(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  useEffect(() => {
    axios.get('/api/Category')
      .then((res) => {
        setDataCategory(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  useEffect(() => {
    axios.get('/api/Author')
      .then((res) => {
        setDataAuthor(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  useEffect(() => {
    axios.get('/api/Borrow')
      .then((res) => {
        setBorrowData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  console.log(dataBook, dataCategory, dataAuthor);

  return (
    <div className="min-h-screen pt-3" style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 255, 0.4) 35%, rgba(128, 128, 128, 0.1) 35%)' }}>
      <div className="flex flex-row">
        <Sidebar />
        <div className="flex flex-col w-full border-opacity-50">
          <div className="grid mt-2 pr-5"><Navbar user={user} /></div>
          <div className="flex">
            <div className="mt-5 pr-5 w-full">
              <Cate
                title="Category Table"
                columns={[
                  'Title',
                  'Action']}
                rows={dataCategory.categories ? dataCategory.categories.map((category) => ({
                  id: category.id,
                  title: category.title,
                  action: 'action'
                })) : []}
              />
            </div>
            <div className="mt-5 pr-5 w-full">
              <Author
                title="Author Table"
                columns={[
                  'Author Name',
                  'Phone',
                  'Action']}
                rows={dataAuthor.authors ? dataAuthor.authors.map((author) => ({
                  id: author.id,
                  name: author.name,
                  email: author.email,
                  phone: author.phone,
                  action: 'action'
                })) : []}
              />
            </div>
          </div>

          <div className="flex">
            <div className="mt-5 pr-5 w-full">
              <Table
                title="Book Table"
                columns={[
                  'Title',
                  'Author',
                  'Stock',
                  'Year',
                  'Action']}
                rows={dataBook.books ? dataBook.books.map((book) => (
                  {
                    id: book.id,
                    title: book.title,
                    category: book.category_id ? dataCategory.categories ? dataCategory.categories.map((category) => {
                      if (category.id == book.category_id) {
                        return category.title;
                      }
                    }) : [] : [],
                    author: book.author_id ? dataAuthor.authors ? dataAuthor.authors.map((author) => {
                      if (author.id == book.author_id) {
                        return author.name;
                      }
                    }) : [] : [],
                    stock: book.stock,
                    year: book.year,
                    action: 'action'
                  })
                ) : []}
                author={dataAuthor}
                category={dataCategory}
              />
            </div>
          </div>
          <div className="flex">
            <div className="mt-5 pr-5 w-full">
              <Borrow
                title="Borrow Table"
                columns={[
                  'Member',
                  'Status',
                  'Borrow Date',
                  'Return Date',
                  'Penalty',
                  'Action']}
                rows={BorrowData.borrows ? BorrowData.borrows.map((borrow) => (
                  {
                    id: borrow.id,
                    user_id: borrow.user_id,
                    book_id: borrow.book_id,
                    user: borrow.user_id ? userData.map((user) => {
                      if (user.id == borrow.user_id) {
                        return user.name;
                      }
                    }) : [],
                    book: borrow.book_id ? dataBook.books ? dataBook.books.map((book) => {
                      if (book.id == borrow.book_id) {
                        return book.title;
                      }
                    }) : [] : [],
                    status: borrow.status,
                    borrow: borrow.borrow_date,
                    return: borrow.return_date,
                    penalty: borrow.penalty,
                    action: 'action'
                  })
                ) : []}
                book={dataBook}
                user={userData}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

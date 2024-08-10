import React from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus
    }
  ];

  return (
    <header className="py-4 shadow-lg bg-gradient-to-b from-blue-900 to-indigo-600 text-white">
      <Container>
        <nav className="flex items-center justify-between flex-wrap">
          <div className="flex items-center flex-shrink-0 mr-6">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <div className="block lg:hidden">
           
          </div>
          <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <ul className="flex flex-wrap items-center justify-end space-x-4">
                {navItems.map(
                  (item) =>
                    item.active && (
                      <li key={item.name}>
                        <button
                          onClick={() => navigate(item.slug)}
                          className="inline-block px-4 py-2 mt-2 lg:mt-0 rounded-full bg-white text-blue-600 hover:bg-yellow-400 hover:text-white transition duration-300 w-full lg:w-auto text-center"
                        >
                          {item.name}
                        </button>
                      </li>
                    )
                )}
              </ul>
            </div>
            <div className="mt-2 lg:mt-0">
              {authStatus && (
                <LogoutBtn />
              )}
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Header;


//react
import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//templates
import HomePlate from './templates/home-template/HomePlate'

//---------------------------------------------------------------------------


const Home = lazy(() => { return import('./pages/home/Home') });
const Login = lazy(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(import('./pages/login/Login')) }, 1000)
  })
});
const Profile = lazy(() => { return import('./pages/profile/Profile') });
const Detail = lazy(() => { return import('./pages/detail/Detail') });
const Register = lazy(() => { return import('./pages/register/Register') });
const Search = lazy(() => { return import('./pages/search/Search') });
const Cart = lazy(() => { return import('./pages/cart/Cart') });

//---------------------------------------------------------------------------

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomePlate />}>
          <Route index element={<Home />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='detail' >
            <Route path=':productID' element={<Detail />} />
          </Route>
          <Route path='cart' element={<Cart />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='search' element={<Search />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

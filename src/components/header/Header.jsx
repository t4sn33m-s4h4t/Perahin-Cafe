import { } from 'react';
import profile from '../../assets/images/profile.png'

export default function Header() {
  return (
    <header className='flex justify-between items-center p-4 mx-4 border-b-2'>
      <h1 className='font-bold text-3xl'> Perahin Knowledge</h1>
      <img src={profile} alt="" />
    </header>
  )
}

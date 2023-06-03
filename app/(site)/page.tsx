import Header from './Header'
import FollowBar from './components/layouts/FollowBar'
import Sidebar from './components/layouts/Sidebar'

export default function Home() {
  return (
    <div className='h-screen bg-black'>
      <div className='container h-full mx-auto xl:px-30 max-w-6xl'>
        <div className='grid grid-cols-4 h-full'>
          <Sidebar/>
          <div className='col-span-3 lg:col-span-2 border-x-[1px] border-neutral-800'>
            <Header label='Home'/>
          </div>
          <FollowBar />
        </div>
      </div>
    </div>
  )
}


import LogoDesa from '../../assets/logo.png'


export default function SideBarAdmin(){
    return(
        <>
            <div className="w-64 h-screen bg-gray-100 text-white flex flex-col border-r border-gray-200">
                <div className="flex items-center justify-center h-16 text-green-500">
                    <img src={LogoDesa} alt="" className='h-10 '/>
                    <h1 className="text-xl font-bold">Desaku.</h1>
                </div>
                <nav className="flex-1 p-4">
                    <ul className="space-y-2">
                        <li>
                            <a href="/dashboard-admin" className="block px-4 py-2  rounded">Dashboard</a>
                        </li>
                        <li>
                            <a href="/manage-users" className="block px-4 py-2  rounded">Manage Users</a>
                        </li>
                        <li>
                            <a href="/settings" className="block px-4 py-2 rounded">Settings</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
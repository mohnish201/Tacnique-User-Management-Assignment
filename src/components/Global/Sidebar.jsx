import { menus } from '@/constants/menu';
import Link from 'next/link';

const Sidebar = () => {
    return <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-52 h-screen pt-20 lg:pt-24 bg-white border-r border-gray-200">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <div className="space-y-3">
                {menus?.map(({ label, href, Icon }, index) =>
                    <Link key={label} className={`flex rounded-md ${index == 1 && 'bg-primary text-primary-foreground'}  items-center gap-4 px-2 py-2`} href={href}>
                        <Icon size={'20px'} strokeWidth={1.5} />
                        <p>
                            {label}
                        </p>
                    </Link>
                )}
            </div>
        </div>
    </aside>
}

export { Sidebar }
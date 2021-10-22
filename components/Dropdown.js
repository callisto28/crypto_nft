import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'


export function MyLink(props) {
    let { href, children, ...rest } = props
    return (
        <Link href={href}>
            <a {...rest}>{children}</a>
        </Link>
    )
}

export default function MyDropdown() {
    return (
        <Menu>
            {({ open }) => (
                <>
                    <Menu.Button className=" text-white font-bold rounded-2xl hover:bg-green-800 hover:text-white pr-3 pl-3">info Crypto</Menu.Button>

                    {/* Use the Transition component. */}
                    <Transition
                        show={open}
                        enter="transition duration-500 ease-out"
                        enterFrom="transform scale-20 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-150 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        {/* Mark this component as `static` */}
                        <Menu.Items static>
                            <Menu.Item>
                                {({ active }) => (
                                    <MyLink href="../crypto" className={`${active && 'bg-red-500'} pr-2 pl-2 rounded-3xl`}>Top 250 crypto</MyLink>
                                )}
                            </Menu.Item>

                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        className={`${active && 'bg-blue-800'} p-1 rounded-3xl`}
                                        href="../exchanges"
                                    >
                                        Exchanges
                                    </a>
                                )}
                            </Menu.Item>

                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    )
}


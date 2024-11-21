import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className="navbar bg-white md:px-20 text-black ">
  <div className="navbar-start  ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>

    <Link href = "/" > <Image src ="https://res.cloudinary.com/dvgs9khxj/image/upload/v1732019948/favicon1_t2xdz7.webp" width={28} height={28} alt='logo' /> </Link>
    <Link href = {"/"} > <h6 className='text-xl font-regular ps-3'>Radius</h6>  </Link>
  
  </div>
  <div className="navbar-center   hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
      <details>
          <summary>Why Radius</summary>
          <ul className="p-2 bg-white">
            <li><a href={'/why-radius/overview/'}>Overview</a></li>
            <li><a href={'/why-radius/technology/'}>Technology</a></li>
            <li><a href={'/why-radius/capabilities/'}>Capabilities</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Offerings</summary>
          <ul className="p-2 bg-white">
            <li><a href={'/offerings/products/'}>Product</a></li>
            <li><a href={'/offerings/solution/'}>Solutions</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Resources </summary>
          <ul className="p-2 bg-white">
            <li><a href='/Resources\blog\'>Blog</a></li>
            <li><a href='/Resources\customer-stories\'>Customer Stories</a></li>
            <li><a href='/Resources\features\'>Features</a></li>
          </ul>
        </details>
      </li>
      <li><a href='/support'>Support</a></li>
    </ul>
  </div>
  <div className="navbar-end  ">
    <a className="btn bg-[#C2E9DB] hover:bg-[#219B9D] hover:text-white font-light text-black" href='https://calendly.com/radius-ois/radius-ois-product-demonstration?month=2024-11' target='blank'>Request A Demo</a>
  </div>
</div>
  )
}

export default Navbar
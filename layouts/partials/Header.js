import Logo from "@components/Logo";
import menu from "@config/menu.json";
import socical from "@config/social.json";
import Social from "@layouts/components/Social";
import ThemeSwitcher from "@layouts/components/ThemeSwitcher";
import SearchModal from "@partials/SearchModal";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  // distructuring the main menu from menu object
  const { main } = menu;

  // states declaration
  const [ searchModal, setSearchModal ] = useState( false );
  const [ showMenu, setShowMenu ] = useState( false );

  // Router
  const router = useRouter();

  //stop scrolling when nav is open
  useEffect( () => {
    if ( showMenu ) {
      document.body.classList.add( "menu-open" );
    } else {
      document.body.classList.remove( "menu-open" );
    }
  }, [ showMenu ] );

  return (
    <header className="sticky top-0 header">
      <nav className="navbar container top-0 sticky sm:px-8">
        <div className="order-0">
          <Logo />
        </div>
        <div className="flex items-center space-x-4 xl:space-x-8">
          <div
            className={ `collapse-menu ${!showMenu && "translate-x-full"
              } lg:flex lg:translate-x-0` }
          >
            <button
              className="absolute right-6 top-11 lg:hidden"
              onClick={ () => setShowMenu( false ) }
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <title>Menu Close</title>
                <polygon
                  points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                  transform="rotate(45 10 10)"
                />
              </svg>
            </button>
            <ul
              id="nav-menu"
              className="navbar-nav  md:w-auto md:space-x-1 lg:flex xl:space-x-2"
            >
              { main.map( ( menu, i ) => (
                <React.Fragment key={ `menu-${i}` }>
                  { menu.hasChildren ? (
                    <li className="nav-item nav-dropdown group relative">
                      <span
                        className={ `nav-link ${menu.children
                          .map( ( c ) => c.url )
                          .includes( router.asPath ) && "active"
                          } inline-flex items-center` }
                      >
                        { menu.name }
                        <svg
                          className="h-4 w-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                      <ul className="nav-dropdown-list hidden transition-all duration-300 group-hover:top-[46px] group-hover:block md:invisible md:absolute md:top-[60px] md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100">
                        { menu.children.map( ( child, i ) => (
                          <li
                            className="nav-dropdown-item"
                            key={ `children-${i}` }
                          >
                            <Link
                              href={ child.url }
                              className={ `nav-dropdown-link block ${router.asPath === child.url && "active"
                                }` }
                            >
                              { child.name }
                            </Link>
                          </li>
                        ) ) }
                      </ul>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <Link
                        href={ menu.url }
                        className={ `nav-link block ${router.asPath === menu.url && "active"
                          }` }
                      >
                        { menu.name }
                      </Link>
                    </li>
                  ) }
                </React.Fragment>
              ) ) }

            </ul>
          </div>
          <ThemeSwitcher />

          <button
            onClick={ () => setShowMenu( !showMenu ) }
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white lg:hidden"
          >
            { showMenu ? (
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <title>Menu Close</title>
                <polygon
                  points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                  transform="rotate(45 10 10)"
                />
              </svg>
            ) : (
              <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                <title>Menu Open</title>
                <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
              </svg>
            ) }
          </button>
        </div>
      </nav >
      { showMenu && (
        <div className="header-backdrop absolute left-0 h-[100vh] lg:hidden"></div>
      ) }
      <slideheader className="bg-blue-700 mt-2 md:flex md:items-center md:justify-between shadow-lg md:pb-2">
        <div className="flex text-white font-bold overflow-x-auto py-1 px-4 bg-blue-700 space-x-8">
          <section className="rounded-xl p-1 flex-shrink-0">
            <span>
              <Link href="/page/2">Blog</Link>
            </span>
          </section>
          <section className="rounded-xl p-1 flex-shrink-0">
            <span>
              <Link href="/cheatsheet">Developers CheatSheet</Link>
            </span>
          </section>
          <section className="rounded-xl p-1 flex-shrink-0">
            <span>
              <Link href="/compiler">Coding Ground</Link>
            </span>
          </section>
          <section className="rounded-xl p-1 flex-shrink-0">
            <span>
              <Link href="/career">Career</Link>
            </span>
          </section>

        </div>
      </slideheader>

    </header >
  );
};

export default Header;

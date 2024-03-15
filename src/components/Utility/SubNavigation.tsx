import { NavLink } from 'react-router-dom';

interface ISubNavigationProps {
  href: string;
  label: string;
}

const SubNavigation = ({ href, label }: ISubNavigationProps) => {
  return (
    <li>
      <NavLink
        to={href}
        className={({ isActive }) =>
          'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
          (isActive && '!text-white')
        }
      >
        {label}
      </NavLink>
    </li>
  );
};

export default SubNavigation;

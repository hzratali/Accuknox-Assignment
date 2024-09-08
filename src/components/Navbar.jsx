import appStyle from "../styles/app.module.css";
import { BELL_ICON, COOKIE_NAME, RELOAD_MSG, USER_ICON } from "../constant";
import { useDispatch } from "react-redux";
import { updateGlobalSearch } from "../slices/globalSearchSlice";

export const Navbar = () => {
	const dispatch = useDispatch();
	return (
		<header className={`${appStyle.header} fixed p-1 bg-slate-100 top-0 z-10`}>
			<nav className='w-full h-full px-6 flex justify-between'>
				<div className='w-[45%] h-full flex items-center'>
					<ul className='flex items-center text-sm gap-2 text-gray-500'>
						<li>Home</li>
						<li>{">"}</li>
						<li className={`${appStyle.active}`}>Dashboard V2</li>
						<li>{">"}</li>
						<li>
							<button
								type='button'
								className='p-2 bg-red-600 rounded-md font-bold text-white'
								title={RELOAD_MSG}
								onClick={() => {
									localStorage.removeItem(COOKIE_NAME);
									window.location.reload();
								}}
							>
								HARD RELOAD
							</button>
						</li>
					</ul>
				</div>
				<div className={`${appStyle.search} w-auto ms-6 h-full flex items-center bg-transparent`}>
					<form className='h-full bg-transparent' onSubmit={(e) => e.preventDefault()}>
						<input
							className='h-full px-2 w-[450px] rounded-md border-2 border-slate-400 bg-slate-100 placeholder:text-sm'
							type='search'
							placeholder='Search anything...'
							onChange={(e) => {
								dispatch(updateGlobalSearch(e.target.value));
							}}
						/>
					</form>
					<div className='ms-4'>
						<input
							className='w-[120px] px-2 bg-zinc-100 text-gray-500 rounded-md border-2 border-gray-200 text-sm'
							type='text'
							name=''
							id=''
							disabled
							value={"something"}
						/>
					</div>
				</div>
				<div className='w-max ms-8 flex gap-10 justify-end items-center'>
					<div className=''>
						<img className='w-[18px] h-[18px]' src={BELL_ICON} alt='' />
					</div>
					<div className='flex gap-3 items-center'>
						<img src={USER_ICON} className='w-[14px] h-[14px]' />
						<span className='font-semibold'>User</span>
					</div>
				</div>
			</nav>
		</header>
	);
};

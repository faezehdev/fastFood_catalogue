import CategortList from "./CategortList"
import SearchInput from "./SearchInput"
export default function Nav() {
  return (
    <div className="navbar w-[70%] py-[1em] max-w-[1400px] flex justify-between items-center bg-white rounded-[8px]
    min-h-[50px] mx-auto translate-y-[-40px] shadow-2xl">
        <CategortList/>
        <SearchInput />
    </div>
  )
}

export default function Header() {
    return (
      <header 
        className="Header BG w-full flex justify-center items-center h-50 bg-cover bg-center" 
        style={{ backgroundImage: "url('./images/header-bg.jpg')" }} >
          <div className="logo w-[70%] max-w-[1400px] flex justify-end items-center">
            <h1 className="text-3xl tracking-[5px] text-amber-50 font-Roboto900">
            FAST FOOD CATALOGUE
            </h1>
          </div>
      </header>
    )
  }
  
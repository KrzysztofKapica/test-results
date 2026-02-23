export function TopNavigation() {
  return (
    <nav>
      <ul className="flex items-center">
        <li className="px-2 py-3 font-bold whitespace-nowrap hover:underline flex items-center">
          <a href="#TODO">O badaniu</a>
          <span className="ml-2 h-[1em] border-r border-black"></span>
        </li>
        <li className="px-2 py-3 font-bold whitespace-nowrap hover:underline flex items-center">
          <a href="#TODO">Wyniki</a>
          <span className="ml-2 h-[1em] border-r border-black"></span>
        </li>
        <li className="px-2 py-3 font-bold whitespace-nowrap hover:underline flex items-center">
          <a href="#TODO">Ambasadorzy</a>
          <span className="ml-2 h-[1em] border-r border-black"></span>
        </li>
        <li className="px-2 py-3 font-bold whitespace-nowrap hover:underline">
          <a href="#TODO">Chcę dołączyć!</a>
        </li>
      </ul>
    </nav>
  );
}
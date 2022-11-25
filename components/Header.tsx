export default function Header() {
  return (
    <header className="h-screen w-full">
      <nav className="flex items-center justify-between pt-[45px] px-[8%]">
        <h2 className="text-white bg-[url('/background.jpg)] cursor-pointer">Portifo<span>lio</span></h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Skills</a></li>
          <li><a href="/">Contact Us</a></li>
        </ul>
        <a href="/">Subscribe</a>
      </nav>
      <div>
        <h4>Hello, my name is</h4>
			  <h1>João <span>Emanuel</span></h1>
			  <h3>I'am a Web Developer.</h3>
        <div>
          <form>
					  <input type="email" name="email" id="mail" placeholder="Enter Your Email"/>
					  <input type="submit" name="submit" value="Lets Start"/>
				  </form>
        </div>
      </div>
    </header>
  )
}
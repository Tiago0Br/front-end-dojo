import instagramApp from '@/assets/instagram-app.png'
import appStoreLogo from '@/assets/app-store-logo.png'
import playStoreLogo from '@/assets/play-store-logo.png'
import Image from 'next/image'

export default function InstagramPage() {
  return (
    <div className="h-screen w-screen bg-white grid grid-cols-1 grid-rows-6 gap-x-8 md:grid-cols-2">
      <div className="hidden md:flex row-span-5 justify-end items-center">
        <Image
          src={instagramApp}
          alt="App do Instagram, baixe já!"
          width={0}
          height={0}
          className="h-[600px]"
        />
      </div>

      <div className="row-span-5 flex flex-col justify-center items-center md:items-start">
        <form className="w-80 flex flex-col justify-center items-center border rounded-sm px-10 py-4 gap-5">
          <h1 className="text-slate-800 text-3xl font-extrabold">Instagram</h1>
          <input
            type="text"
            placeholder="Número de telefone ou e-mail"
            className="bg-slate-50 h-9 w-full pl-3 border rounded-sm"
          />
          <input
            type="password"
            placeholder="Senha"
            className="bg-slate-50 h-9 w-full pl-3 border rounded-sm"
          />

          <button className="bg-blue-400 hover:bg-blue-500 transition-colors w-full rounded-md h-8 text-slate-50">
            Entrar
          </button>

          <a href="#" className="text-blue-800 font-bold">
            Logar com o Facebook
          </a>
          <a href="#" className="text-blue-800 text-sm">
            Esqueci minha senha
          </a>
        </form>

        <div className="border w-80 my-4 text-center py-4">
          <p className="text-slate-800">
            Não tem conta?{' '}
            <a href="#" className="text-blue-500 font-bold">
              Cadastre-se
            </a>
          </p>
        </div>

        <p className="w-80 text-center text-slate-800">Obtenha o aplicativo.</p>

        <div className="flex gap-2 mt-4">
          <a href="#">
            <Image
              src={appStoreLogo}
              alt="Download na App Store"
              width={0}
              height={0}
              className="h-12 w-40"
            />
          </a>
          <a href="#">
            <Image
              src={playStoreLogo}
              alt="Download no Google Play"
              width={0}
              height={0}
              className="h-12 w-40"
            />
          </a>
        </div>
      </div>
      <div className="row-span-1 col-span-2">
        <ul className="flex flex-wrap gap-5 justify-center">
          <li className="text-slate-800 text-sm">
            <a href="#">Meta</a>
          </li>
          <li className="text-slate-800 text-sm">
            <a href="#">Sobre</a>
          </li>
          <li className="text-slate-800 text-sm">
            <a href="#">Blog</a>
          </li>
          <li className="text-slate-800 text-sm">
            <a href="#">Carreiras</a>
          </li>
          <li className="text-slate-800 text-sm">
            <a href="#">API</a>
          </li>
          <li className="text-slate-800 text-sm">
            <a href="#">Privacidade</a>
          </li>
        </ul>

        <ul className="flex flex-wrap gap-5 justify-center mt-6">
          <li className="text-slate-800 text-sm">Português (Brasil)</li>
          <li className="text-slate-800 text-sm">
            &copy; 2024 Instagram from Meta
          </li>
        </ul>
      </div>
    </div>
  )
}

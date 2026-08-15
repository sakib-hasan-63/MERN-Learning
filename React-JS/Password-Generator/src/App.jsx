import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  // ================= COPY PASSWORD =================
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  // ================= PASSWORD GENERATOR =================
  const passwordGenerator = useCallback(() => {
    let pass = ""

    let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }

    if (charAllowed) {
      str += "~!@#$%^&*(){}[]<>?/|"
    }

    // Exact password length
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  // ================= GENERATE PASSWORD =================
  useEffect(() => {
    passwordGenerator()
  }, [length, charAllowed, numberAllowed, passwordGenerator])

  return (
    <div
      className="
        min-h-screen
        w-full
        flex
        items-center
        justify-center
        px-4
        py-10
        bg-gradient-to-br
        from-slate-950
        via-cyan-950
        to-slate-900
      "
    >

      {/* ================= MAIN CARD ================= */}
      <div
        className="
          w-full
          max-w-2xl
          rounded-3xl
          border
          border-cyan-400/20
          bg-white/10
          backdrop-blur-xl
          shadow-[0_20px_80px_rgba(0,0,0,0.45)]
          px-6
          py-8
          sm:px-10
          sm:py-10
          transition-all
          duration-500
          hover:border-cyan-400/40
          hover:shadow-cyan-500/10
        "
      >

        {/* ================= HEADING ================= */}
        <div className="text-center mb-8">

          <div
            className="
              inline-flex
              items-center
              justify-center
              w-16
              h-16
              mb-5
              rounded-2xl
              bg-cyan-400/10
              border
              border-cyan-400/20
              text-3xl
              shadow-lg
              shadow-cyan-500/10
            "
          >
            🔐
          </div>

          <h1
            className="
              text-3xl
              sm:text-4xl
              font-extrabold
              tracking-wide
              text-white
              mb-3
            "
          >
            PASSWORD
            <span className="text-cyan-400"> GENERATOR</span>
          </h1>

          <p
            className="
              text-sm
              sm:text-base
              text-slate-300
              max-w-md
              mx-auto
              leading-relaxed
            "
          >
            Create a strong and secure password with
            customizable options.
          </p>

        </div>


        {/* ================= PASSWORD INPUT ================= */}
        <div className="mb-8">

          <label
            className="
              block
              text-sm
              font-semibold
              text-slate-300
              mb-3
            "
          >
            Generated Password
          </label>

          <div
            className="
              flex
              w-full
              overflow-hidden
              rounded-2xl
              border
              border-cyan-400/30
              bg-slate-950/70
              shadow-inner
              transition-all
              duration-300
              focus-within:border-cyan-400
              focus-within:ring-2
              focus-within:ring-cyan-400/20
            "
          >

            {/* Lock Icon */}
            <div
              className="
                hidden
                sm:flex
                items-center
                justify-center
                px-4
                text-cyan-400
                text-xl
                border-r
                border-cyan-400/10
              "
            >
              🔒
            </div>

            <input
              type="text"
              value={password}
              className="
                outline-none
                w-full
                min-w-0
                bg-transparent
                text-cyan-300
                text-base
                sm:text-lg
                font-mono
                font-semibold
                tracking-wide
                px-4
                py-4
                sm:py-5
              "
              placeholder="Your password"
              readOnly
              ref={passwordRef}
            />

            <button
              onClick={copyPasswordToClipboard}
              className="
                bg-cyan-500
                hover:bg-cyan-400
                active:scale-95
                text-slate-950
                font-bold
                text-sm
                sm:text-base
                px-5
                sm:px-7
                transition-all
                duration-200
                shrink-0
              "
            >
              📋 Copy
            </button>

          </div>

        </div>


        {/* ================= OPTIONS ================= */}
        <div
          className="
            rounded-2xl
            border
            border-white/10
            bg-slate-950/30
            p-5
            sm:p-6
          "
        >

          <h2
            className="
              text-lg
              sm:text-xl
              font-bold
              text-white
              mb-6
            "
          >
            Password Settings
          </h2>


          {/* ================= LENGTH ================= */}
          <div className="mb-7">

            <div className="flex items-center justify-between mb-4">

              <label
                className="
                  text-sm
                  sm:text-base
                  font-semibold
                  text-slate-300
                "
              >
                Password Length
              </label>

              <span
                className="
                  px-4
                  py-1.5
                  rounded-full
                  bg-cyan-400/10
                  border
                  border-cyan-400/20
                  text-cyan-400
                  font-bold
                  text-sm
                "
              >
                {length} Characters
              </span>

            </div>


            <input
              type="range"
              min={8}
              max={50}
              value={length}
              onChange={(e) => {
                setlength(Number(e.target.value))
              }}
              className="
                w-full
                h-2
                rounded-lg
                appearance-none
                cursor-pointer
                accent-cyan-400
                bg-slate-700
              "
            />


            <div
              className="
                flex
                justify-between
                mt-2
                text-xs
                text-slate-500
              "
            >
              <span>8</span>
              <span>25</span>
              <span>50</span>
            </div>

          </div>


          {/* ================= CHECKBOXES ================= */}
          <div className="grid sm:grid-cols-2 gap-4">

            {/* Numbers */}
            <label
              htmlFor="numberInput"
              className="
                group
                flex
                items-center
                gap-4
                p-4
                rounded-xl
                border
                border-white/10
                bg-white/5
                cursor-pointer
                transition-all
                duration-300
                hover:border-cyan-400/40
                hover:bg-cyan-400/5
                hover:-translate-y-1
              "
            >

              <input
                type="checkbox"
                checked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }}
                className="
                  w-5
                  h-5
                  accent-cyan-400
                  cursor-pointer
                "
              />

              <div>
                <p
                  className="
                    text-white
                    font-semibold
                    text-sm
                    sm:text-base
                  "
                >
                  Include Numbers
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  0 - 9
                </p>
              </div>

            </label>


            {/* Characters */}
            <label
              htmlFor="charInput"
              className="
                group
                flex
                items-center
                gap-4
                p-4
                rounded-xl
                border
                border-white/10
                bg-white/5
                cursor-pointer
                transition-all
                duration-300
                hover:border-cyan-400/40
                hover:bg-cyan-400/5
                hover:-translate-y-1
              "
            >

              <input
                type="checkbox"
                checked={charAllowed}
                id="charInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
                className="
                  w-5
                  h-5
                  accent-cyan-400
                  cursor-pointer
                "
              />

              <div>
                <p
                  className="
                    text-white
                    font-semibold
                    text-sm
                    sm:text-base
                  "
                >
                  Include Characters
                </p>

                <p className="text-xs text-slate-500 mt-1">
                  ! @ # $ % & *
                </p>
              </div>

            </label>

          </div>

        </div>


        {/* ================= FOOTER INFO ================= */}
        <div className="mt-7 text-center">

          <p className="text-xs sm:text-sm text-slate-500">
            🔐 Your password is generated locally in your browser.
          </p>

        </div>

      </div>

    </div>
  )
}

export default App
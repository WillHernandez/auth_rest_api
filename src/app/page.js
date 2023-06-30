import WithAuth from "./components/WithAuth"

function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
       <WithAuth /> 
      </div>
    </main>
  )
}

export default Home
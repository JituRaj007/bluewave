import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="main error">
        <div className="error-sec" >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <h1>Not found – 404!</h1>
                        <div>
                            <Link href="/">Go back to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}
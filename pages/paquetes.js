import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
        <div className="row">
            <div className="col-lg-4 col-sm-12">
                <div className="card text-white bg-dark mb-3">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h4 className="card-title">Dark card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="/">
                            <button type="button" className="btn btn-primary w-100 mt-3">INICIO</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-12">
                <div className="card text-white bg-dark mb-3">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h4 className="card-title">Dark card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="/">
                            <button type="button" className="btn btn-primary w-100 mt-3">INICIO</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-sm-12">
                <div className="card text-white bg-dark mb-3">
                    <div className="card-header">Header</div>
                    <div className="card-body">
                        <h4 className="card-title">Dark card title</h4>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="/">
                            <button type="button" className="btn btn-primary w-100 mt-3">INICIO</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <style jsx>{`
            .row {
                overflow: hidden;
            }
            .col-lg-4.col-sm-12 .card {
                max-width: 20rem;
            }
            @media (max-width: 997px) {
                .col-lg-4.col-sm-12 .card {
                    max-width: 50%;
                }
                .col-lg-4.col-sm-12 .card {
                    max-width: 90%;
                    margin: auto;
                }
            }
            @media (max-width: 700px) {
                .col-lg-4.col-sm-12 {
                    padding: 0 !important;
                    margin:0;
                }
                .col-lg-4.col-sm-12 .card {
                    max-width: 90%;
                    margin: auto;
                }
            }
        `}</style>
    </Layout>
  )
}

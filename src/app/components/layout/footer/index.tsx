import Link from "next/link"

const Footer = () => {
    return (
        <footer className="-translate-y-[1px] bg-white border-t border-primary/10">
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="max-w-3xl mx-auto  gap-10 sm:gap-16 px-4 sm:px-7 py-4 md:py-7">
                        <p>2026 © Taniyah Payton. All rights reserved </p>
                        <p>Built with Next.js · Template by <Link href="https://getnextjstemplates.com/" target="_blank">Getnextjstemplates</Link></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
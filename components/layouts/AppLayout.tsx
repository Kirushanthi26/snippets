
type AppLayoutProps = {
    children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
    return <>
        <main className="container mx-auto px-12">
            {children}
        </main>
    </>
}
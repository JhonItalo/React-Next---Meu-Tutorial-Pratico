
export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    console.log("render layout page layout-fetch")
    return (
        <>
            <header className="w-full py-4 px-2 font-bold mt-4 bg-blue-600 ">
                <h1 className="font-bold text-3xl">Layout da page layout-fetch</h1>
            </header>
            {children}
        </>
    );
}
/*   const getrepos = async () => {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const response = await fetch(`https://api.github.com/users/JhonItalo/repos`, {
            cache: 'no-store'
        });
        const data = await response.json();
        return data
    } */
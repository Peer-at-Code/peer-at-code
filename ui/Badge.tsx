
export default function Badge({ title, path, alt, type }: { title: string; path: string; alt: string; type: string }) {
    return (
        <div className='text-center  md:w-[9%] sm:w-[15%] w-[20%] pr-3 mt-3'>
            <img src={path} alt={alt} className={`f-full w-full rounded-full border-2 lg:border-4 ${type === "hard" ? 'border-red-600' : type === 'easy' ? 'border-green-600' : 'border-yellow-600'}  `} />
            <h2 className='pt-2'>{title}</h2>
        </div>
    );

}
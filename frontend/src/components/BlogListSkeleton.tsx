const BlogListSkeleton = () => {
    return (
        <div role='status' className='flex justify-center flex-col w-full p-4 space-y-4 divide-y rounded shadow animate-pulse '>
            <div className='flex items-center '>
                <div>
                    <div className='h-3.5 bg-gray-300 rounded-full  w-24 mb-2.5'></div>
                    <div className='w-32 h-3 bg-gray-200 rounded-full '></div>
                </div>
            </div>
            <div className='flex items-center justify-between pt-4'>
                <div>
                    <div className='h-3.5 bg-gray-300 rounded-full  w-24 mb-2.5'></div>
                    <div className='w-32 h-3 bg-gray-200 rounded-full '></div>
                </div>
            </div>
            <div className='flex items-center justify-between pt-4'>
                <div>
                    <div className='h-3.5 bg-gray-300 rounded-full  w-24 mb-2.5'></div>
                    <div className='w-32 h-3 bg-gray-200 rounded-full '></div>
                </div>
            </div>
            <div className='flex items-center justify-between pt-4'>
                <div>
                    <div className='h-3.5 bg-gray-300 rounded-full  mb-2.5'></div>
                    <div className='w-32 h-3 bg-gray-200 rounded-full '></div>
                </div>
            </div>
            <div className='flex items-center justify-between pt-4'>
                <div>
                    <div className='h-3.5 bg-gray-300 rounded-full  w-24 mb-2.5'></div>
                    <div className='w-32 h-3 bg-gray-200 rounded-full '></div>
                </div>
            </div>
            <span className='sr-only'>Loading...</span>
        </div>

    )
}

export default BlogListSkeleton
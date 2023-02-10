export const statusColor = (status: string) => {
    let fontColor = ''
    let bgColor = 'bg-black'
    let bbgColor = ''
    switch (status) {
        case "Idling":
            fontColor = 'text-gray-500'
            bgColor = 'bg-gray-500'
            bbgColor = 'bg-gray-100'
            break;
        case "Starting":
            fontColor = 'text-yellow-500'
            bgColor = 'bg-yellow-500'
            bbgColor = 'bg-yellow-50'
            break;
        case "Running":
            fontColor = 'text-yellow-500'
            bgColor = 'bg-yellow-500'
            bbgColor = 'bg-yellow-50'
            break;
        case "Completed":
            fontColor = 'text-green-500'
            bgColor = 'bg-green-500'
            bbgColor = 'bg-green-50'
            break;
        case "Error":
            fontColor = 'text-red-500'
            bgColor = 'bg-red-500'
            bbgColor = 'bg-red-50'
            break;
        case "Terminated":
            fontColor = 'text-red-500'
            bgColor = 'bg-red-500'
            bbgColor = 'bg-red-50'
            break;
        case "Queuing":
            fontColor = 'text-blue-500'
            bgColor = 'bg-blue-500'
            bbgColor = 'bg-blue-50'
            break;
        case "Published":
            fontColor = 'text-orange-500'
            bgColor = 'bg-orange-500'
            bbgColor = 'bg-orange-50'
            break;
        case "Canceled":
            fontColor = 'text-gray-500'
            bgColor = 'bg-gray-500'
            bbgColor = 'bg-gray-50'
            break;
        case "Scheduled":
            fontColor = 'text-blue-500'
            bgColor = 'bg-blue-500'
            bbgColor = 'bg-blue-50'
            break;
    }
    return { fontColor, bgColor, bbgColor }
}
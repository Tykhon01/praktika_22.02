import { formatDistanceToNow } from "date-fns";

export const formatDateNow = (postedAt) => {
    return formatDistanceToNow(new Date(postedAt), { addSuffix: true })
};
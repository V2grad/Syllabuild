import ID from '@/utils/id'

export default function (){
    return {
        id: ID(),
        title: 'Untitled',
        tags: [], // User defined keywords, like "HW", "TEST", "Events",
        description: '',
        attachments: [] // Links for now
    }
}
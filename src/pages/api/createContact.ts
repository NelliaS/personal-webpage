import axios, {AxiosResponse} from 'axios'

const baseURL = process.env.NEXT_PUBLIC_INTEGROMAT_ENDPOINT

const CreateContactAPI = {
    createContact: async (
        client: string,
        date: Date,
        email: string,
        phoneNumber: string,
        isProcessingChecked: boolean,
        note: string
    ): Promise<Omit<AxiosResponse, 'statusText'| 'headers' | 'config'>> => {
        const {data, status} = await axios.post(baseURL || '',  {
            client: client,
            date: date,
            email: email,
            phoneNumber: phoneNumber,
            isProcessingChecked: isProcessingChecked,
            note: note
        }, {
            headers: {
              'Content-Type': 'application/json',
            }
          })
        return {
            data, 
            status
        }
    },
}

export default CreateContactAPI
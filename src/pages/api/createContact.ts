import axios, {AxiosResponse} from 'axios'
import { INTEGROMAT_ENDPOINT } from '../../utils/Constants'

const baseURL = INTEGROMAT_ENDPOINT + process.env.NEXT_PUBLIC_INTEGROMAT_CREATE_CONTACT_UID

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
          }).then((data) => {return data})
          .catch((error) => {return error})
        return {
            data, 
            status
        }
    },
}

export default CreateContactAPI
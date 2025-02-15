import { Newsletter } from "./Newsletter";
import MailchimpSubscribe from "react-mailchimp-subscribe";

export const Mailchimp=()=>{
    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}$id=`


    return(
        <>
        <MailchimpSubscribe
            url={postUrl}
            render={({subcribe, status, message})=>(
                <Newsletter
                    status={status}
                    message={message}
                    onValidated={formData=>subcribe(formData)}/>
            )}
            />
        </>
    )
} 
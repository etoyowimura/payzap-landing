import React from 'react'
import Collapse from './Collapse'

const Faq = () => {

    const data = [
        {
            key: 1,
            isOpen: false,  
            question: 'What is Payzap?',
            answer: 'PayZap is a mobile payment app designed to simplify daily transactions and utility payments, offering a convenient platform to manage bills and everyday expenses seamlessly.',
        }, {
            key: 2,
            isOpen: false,
            question: 'What utilities can I manage using Payzap?',
            answer: 'PayZap allows you to handle various utilities, including electricity, water, gas, internet, and more, providing a single platform for managing diverse bills.',
        }, {
            key: 3,
            isOpen: false,
            question: 'How do I pay my bills using Payzap?',
            answer: 'Paying bills through PayZap is easy. Simply add your utility accounts, view pending bills, and make secure payments using various supported payment methods within the app.',
        }, {
            key: 4,
            isOpen: false,
            question: 'Is PayZap secure for financial transactions?',
            answer: 'Yes, PayZap prioritizes security. We employ robust measures to safeguard your financial information, ensuring a safe and secure payment environment.',
        }, {
            key: 5,
            isOpen: false,
            question: ' Can I track my utility usage with PayZap?',
            answer: 'Absolutely! PayZap offers usage insights, allowing you to monitor and analyze your utility consumption trends for better management and optimization.',
        }, {
            key: 6,
            isOpen: false,
            question: ' Are there any additional fees for using PayZap?',
            answer: 'PayZap does not charge any additional fees for bill payments. However, be mindful of any transaction fees from your bank or service provider.',
        }, {
            key: 7,
            isOpen: false,
            question: 'How can I contact customer support for assistance?',
            answer: 'For any queries or assistance, visit our support section within the app or reach out to our dedicated customer support team through email or live chat.',
        }, {
            key: 8,
            isOpen: false,
            question: 'Can I set up recurring payments for my bills?',
            answer: 'Yes, PayZap allows you to set up recurring payments for your utility bills, ensuring timely payments without the need for manual processing every month.',
        }
        , {
            key: 9,
            isOpen: false,
            question: 'What happens if I encounter an issue while making a payment?',
            answer: 'In case of payment issues, our support team is available to assist you promptly. Feel free to reach out for immediate resolution.',
        }
        , {
            key: 10,
            isOpen: false,
            question: 'How do I download and start using PayZap?',
            answer: 'You can download PayZap from the App Store or Google Play Store, create an account, and start managing your bills and payments instantly.',
        }
    ]
    return (
        <div className='Faq' id='faq'>
            <h1 className="collapse_title">Frequently asked
                questions</h1>
            {data.map((items) => {
                return <Collapse data={items} />
            })}
        </div>
    )
}

export default Faq
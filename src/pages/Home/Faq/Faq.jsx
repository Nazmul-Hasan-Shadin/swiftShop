
const Faq = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div>
                <h1 className="text-center text-4xl font-bold my-4">Frequently Asked Questions</h1>
                <div className="grid grid-cols-1 gap-4">
                    <div tabIndex={0} className="collapse collapse-arrow border border-[#797979] bg-[#D9D9D9] rounded-md text-start">
                        <div className="collapse-title text-xl font-bold">
                        What categories can I sell on SwiftShop ? 
                        </div>
                        <div className="collapse-content bg-white text-sm font-normal">
                            <p className="py-4">SwiftShop has over 40 main categories of good that you can sell your products in including fashion, electronics,FMCG,lifestyle,health & beauty to name a few. However we do have itemsthat are counterfeit,dangerous and prohibited by law or cultural normas which seller must refrain from listing. Click here to learn more.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-[#797979] bg-[#D9D9D9] rounded-md text-start">
                        <div className="collapse-title text-xl font-bold">
                        What is SwiftShop commission?
                        </div>
                        <div className="collapse-content bg-white text-sm font-normal">
                            <p className="py-4">Opening a shop on SwiftShop is completely free.However, SwiftShop does deduct a small percentage of commission from the payment of your orders. Each product commission depends on the type of category it falls under.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-[#797979] bg-[#D9D9D9] rounded-md text-start">
                        <div className="collapse-title text-xl font-bold">
                        What documents do I need to provide during signup? 
                        </div>
                        <div className="collapse-content bg-white text-sm font-normal">
                            <p className="py-4">Before you signup,make sure you are ready with the following documents ; <br/> a) ID information (National ID Card for individual sellers OR Business registration document for corporate seller ) <br/> b) A bank cheque copy with the same titles as your ID/corporate information. SwiftShop will ne sending payments from your sales to this bank account.<a href="#" className="text-[#80B4E3]">Click here</a> to learn more.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow border border-[#797979] bg-[#D9D9D9] rounded-md text-start">
                        <div className="collapse-title text-xl font-bold">
                        What if incorrect information is submitted dusring signup?
                        </div>
                        <div className="collapse-content bg-white text-sm font-normal">
                            <p className="py-4 ">Before you signup,make sure you are ready with the following documents ; <br/> a) ID information (National ID Card for individual sellers OR Business registration document for corporate seller ) <br/> b) A bank cheque copy with the same titles as your ID/corporate information. SwiftShop will ne sending payments from your sales to this bank account.<a href="#" className="text-[#80B4E3]">Click here</a> to learn more.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;
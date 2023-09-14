import paybisLogo from './assets/paybis.webp';




type ResultRowProps ={
    loading?: boolean;
    providerName?: string;
    btc?:string;
};

const logosUrls ={
    paybis: {source:paybisLogo, invert:true},
    guardian: {source:'https://guardarian.com/main-logo.svg'},
    moonpay: {source:'https://www.moonpay.com/assets/logo-full-white.svg'},
    transak: {source:'https://assets.transak.com/images/website/transak-logo-white.svg'},


}

export default function ResultRow({loading,providerName,btc}:ResultRowProps){
    return(
        <div className="relative border min-h-[64px] border-white/10 rounded-lg bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-4 my-2 overflow-hidden "> 
        <div className="flex gap-4">
            {providerName && (
                <div>
                    <img src={paybisLogo} className=" h-6 invert"  
                    alt ="" />


                </div>

            )}
           
            <div className="grow">{providerName || ''}</div>
            
            {btc && (
            <div className="flex gap-2">
            <span className="text-xl text-purple-200/80">
                {new Intl.NumberFormat('en-US', {minimumFractionDigits:8}).format(parseFloat(btc))}
                </span>
            <span className="text-xl text-purple-300/50">BTC</span>
            </div>
             )}
        </div>
        {loading &&(
            <div className= "inset-0 absolute bg-gradient-to-r from-transparent via-blue-900/50 to transparent skeleton-animation" />
        )}
        </div>
    );
}
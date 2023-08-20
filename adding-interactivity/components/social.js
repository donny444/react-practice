function SocialButton({ message, children }) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    )
}
export default function SocialBar() {
    return (
        <div>
            <SocialButton message="You clicked Facebook!">
                Facebook
            </SocialButton>
            <SocialButton message="You clicked Instagram!">
                Instagram
            </SocialButton>
            <SocialButton message="You clicked Twitter!">
                Twitter
            </SocialButton>
        </div>
    )
}
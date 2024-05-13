import { Button } from "./Button";

export const Send = () => {
    return (
        <>
            <form className="flex flex-col items-center justify-center gap-y-3 w-full mb-8">
                <h2 className="text-[#18181B] font-bold text-lg">
                  Send Fund
                </h2>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter amount (NGN)"
                    className="p-2 flex h-10 w-[250px] rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground"
                    required
                />
                <Button variant="secondary" size="sm">
                    Send
                </Button>
            </form>
        </>
    );
};

import { Typography } from "@/components/ui";

export function WelcomeMessage({ name }){
    return(
        <div>
            <Typography variant='h2' color="blue" className="font-bold">
            Bienvenido a la misión, { name }.
            </Typography>
        </div>
    );
}
type AdminProductsDashboardProps = {
    title: string 
    description: string | undefined
}

export const AdminDashboardHeader = ({ title, description }: AdminProductsDashboardProps) => {
    return (
        <div>
            <h1 className="text-3xl font-extrabold">{title}</h1>
            <span className="text-md text-black/50">{description}</span>
        </div>
    )
}
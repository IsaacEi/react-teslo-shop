import { type FC } from 'react'

interface Props {
    title: string;
    subtitle?: string;
}

export const AdminTitle: FC<Props> = ({ title, subtitle }) => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        {title}
      </h1>
      {subtitle && (
        <p className="text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  )
}

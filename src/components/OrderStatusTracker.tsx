import React from 'react';
import { cn } from "@/lib/utils";
import { CheckCircle, Package, Truck, Loader, CircleDot, XCircle } from 'lucide-react';
import { OrderStatus } from '@/context/UserDataContext';

interface OrderStatusTrackerProps {
  currentStatus: OrderStatus;
}

const statusConfig: { [key in OrderStatus]: { label: string; icon: React.ElementType } } = {
  placed: { label: 'Order Placed', icon: CircleDot },
  received: { label: 'Order Received', icon: Loader },
  processing: { label: 'Preparing', icon: Package },
  shipped: { label: 'Yolda', icon: Truck },
  delivered: { label: 'Teslim Edildi', icon: CheckCircle },
  cancelled: { label: 'İptal Edildi', icon: XCircle },
};

const statusOrder: OrderStatus[] = ['placed', 'received', 'processing', 'shipped', 'delivered'];

const OrderStatusTracker: React.FC<OrderStatusTrackerProps> = ({ currentStatus }) => {
  if (currentStatus === 'cancelled') {
    const { label, icon: Icon } = statusConfig.cancelled;
    return (
      <div className="flex items-center justify-center p-4 rounded-lg bg-red-50 border border-red-200">
        <Icon className="h-6 w-6 text-red-500 mr-3" />
        <span className="font-semibold text-red-600">{label}</span>
      </div>
    );
  }

  const currentStatusIndex = statusOrder.indexOf(currentStatus);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        {statusOrder.map((status, index) => {
          const { icon: Icon } = statusConfig[status];
          const isCompleted = index < currentStatusIndex;
          const isActive = index === currentStatusIndex;

          return (
            <React.Fragment key={status}>
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                    isCompleted ? "bg-green-500 text-white" : "",
                    isActive ? "bg-kibo-orange text-white ring-4 ring-kibo-orange/30" : "",
                    !isCompleted && !isActive ? "bg-gray-200 text-gray-500" : ""
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              {index < statusOrder.length - 1 && (
                <div
                  className={cn(
                    "flex-1 h-1 transition-all duration-300",
                    isCompleted ? "bg-green-500" : "bg-gray-200"
                  )}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
      <div className="flex justify-between mt-2 text-xs text-center">
        {statusOrder.map(status => (
          <div key={status} className="w-1/5 font-medium text-gray-600">
            {statusConfig[status].label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderStatusTracker;

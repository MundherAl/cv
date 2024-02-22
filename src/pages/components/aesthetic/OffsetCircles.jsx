export default function OffsetCircles({ numCircles }) {
    const circles = new Array(numCircles).fill(null);

    const renderCircles = (n) => {
        if (n === 0) return null;
        return (
            <div className="absolute pointer-events-none w-40 h-40 border-2 border-black/5 rounded-full flex items-center justify-center -translate-x-8">
                {renderCircles(n - 1)}
            </div>
        );
    };

    return renderCircles(circles.length);
}
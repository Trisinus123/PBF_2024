export default function Tombol_1() {
    // menambahkan fungsi untuk menangani klik tombol
    function handleClick() {
        alert("Tombol telah ditekan!!!");
    }

    function handleMouseOver() {
        alert("Eits, mau mancet Tombol ya?");
    }
    return (
        <button 
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
        onClick={handleClick}
        onMouseOver={handleMouseOver}
    >
            Ini Tombol
        </button>
    );
}

export function Tombol_2({ isiPesan, namaTombol }: { isiPesan: string, namaTombol: string }) {
    return (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
            onClick={() => alert(isiPesan)}>
            {namaTombol}
        </button>
    )
}







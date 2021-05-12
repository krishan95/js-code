function insert_ads_every_second_p( $content ) {
    $closing_p = '</p>';
    $paragraphs = explode( $closing_p, $content );
    foreach ($paragraphs as $index => $paragraph) {
        $paragraphs[$index] .= $closing_p;
        if ( in_array($index, array(1, 5, 9)) ) {
            // ad code goes here
            $paragraphs[$index] .= '<p style="background:#f00">Ad goes here</p>';
        }
    }

    return implode( '', $paragraphs );
}
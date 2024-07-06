from pydub import AudioSegment

# Load the MP3 file
audio = AudioSegment.from_mp3("file.mp3")

# Define the start and end times for the segment
start_time = 00  # Start time in milliseconds (e.g., 10 seconds)
end_time = 600000    # End time in milliseconds (e.g., 30 seconds)

# Cut the segment
segment = audio[start_time:end_time]

# Export the cut segment to a new MP3 file
segment.export("1.mp3", format="mp3")

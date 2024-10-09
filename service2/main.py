from flask import Flask, jsonify
import subprocess
import re
import shutil

app = Flask(__name__)

def get_service2_info():
    ip_address = subprocess.check_output(["hostname", "-i"]).decode().strip()
    uptime = subprocess.check_output(["uptime"]).decode().strip()
    total, used, free = shutil.disk_usage("/")
    free_gb = free / (2**30)  
    disk_space = f"{free_gb:.2f} GB"  

    processes = subprocess.check_output(["ps"]).decode().strip().split("\n")
    
    uptime_formatted = re.search(r'up (.*?),', uptime)
    uptime = uptime_formatted.group(1) if uptime_formatted else "N/A"

    return {
        "ip_address": ip_address,
        "processes": processes,
        "disk_space": disk_space,
        "uptime": uptime
    }

@app.route('/info', methods=['GET'])
def info():
    service2_info = get_service2_info()
    return jsonify(service2_info)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)